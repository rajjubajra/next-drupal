import { NextResponse } from 'next/server';
import aboutus from './data.json';

export async function GET(request) {
  //in order to return json data format '.json' need to be added on NextResponse
  return NextResponse.json(aboutus);
}
