// app/api/pets/route.ts
// import { NextResponse } from 'next/server';
// import pool from '@/lib/db';

// export async function GET() {
//   try {
//     const result = await pool.query('SELECT * FROM pets ORDER BY created_at DESC');
//     return NextResponse.json(result.rows);
//   } catch (err) {
//     console.error('Error fetching pets:', err);
//     return NextResponse.json({ error: 'Database error' }, { status: 500 });
//   }
// }
