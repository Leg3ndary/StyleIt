import { NextResponse } from 'next/server';
import connectDB from '../../../utils/mongodb';

// POST handler for adding new clothing
export async function POST(request: Request) {
  try {
    const client = await connectDB();
    const db = client.db("deltahacks");
    
    // Get the data from request body
    const data = await request.json();
    
    // Insert into database
    const result = await db.collection('clothes').insertOne({
      type: data.type,
      price: data.price,
      url: data.url,
      brand: data.brand,
    });

    return NextResponse.json(result);

  } catch (error) {
    console.error('Error saving clothing:', error);
  }
}

// GET handler for fetching clothing
// export async function GET(request: Request) {
//   try {
//     const client = await connectDB();
//     const db = client.db("deltahacks");
    
//     // Get URL parameters
//     const { searchParams } = new URL(request.url);
//     const type = searchParams.get('type');
    
//     // Build query
//     const query = type ? { type } : {};
    
//     const clothes = await db.collection('clothes')
//       .find(query)
//       .sort({ createdAt: -1 })
//       .toArray();

//     return NextResponse.json({ 
//       success: true, 
//       data: clothes 
//     });

//   } catch (error) {
//     console.error('Error fetching clothing:', error);
//     return NextResponse.json({ 
//       success: false, 
//       error: 'Failed to fetch clothing items' 
//     }, { status: 500 });
//   }
// }
