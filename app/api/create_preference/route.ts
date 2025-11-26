import { NextRequest, NextResponse } from 'next/server'
import { MercadoPagoConfig, Preference } from 'mercadopago'

// Configurar el cliente de Mercado Pago
const client = new MercadoPagoConfig({ 
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN || '' 
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { items } = body

    const preference = new Preference(client)

    // URL base para las redirecciones
    const host = request.headers.get('host') || 'localhost:3000'
    const protocol = host.includes('localhost') ? 'http' : 'https'
    const baseUrl = `${protocol}://${host}`
    const isLocalhost = host.includes('localhost')

    console.log('Base URL for redirects:', baseUrl)
    console.log('Is localhost:', isLocalhost)

    // Construir la preferencia
    const preferenceData: any = {
      items: items.map((item: any) => ({
        id: String(item.id),
        title: item.name,
        quantity: Number(item.quantity),
        currency_id: 'ARS',
        unit_price: Number(item.price),
      })),
      statement_descriptor: 'TechNova',
      external_reference: `order_${Date.now()}`,
      // URLs de redirección después del pago
      back_urls: {
        success: `${baseUrl}/pago/success`,
        failure: `${baseUrl}/pago/failure`,
        pending: `${baseUrl}/pago/pending`,
      },
      auto_return: 'approved', // Redirige automáticamente cuando el pago es aprobado
    }

    console.log('Creating preference with data:', JSON.stringify(preferenceData, null, 2))

    const result = await preference.create({ body: preferenceData })

    console.log('Preference created successfully!')
    console.log('Preference ID:', result.id)
    console.log('Init point:', result.init_point)

    return NextResponse.json({ 
      id: result.id,
      init_point: result.init_point 
    })
  } catch (error: any) {
    console.error('Error creating preference:', error)
    
    // Extraer mensaje de error más específico
    const errorMessage = error.message || error.cause?.[0]?.description || 'Error al crear la preferencia de pago'
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}
