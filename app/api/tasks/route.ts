import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";
import getCurrentUser from "@/actions/getCurrentUser";
import getSession from "@/actions/getSession";

export async function POST(
  request: Request, 
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { 
  
    name,
    email,
    image,
    contact,
   
   } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  const user = await prisma.user.create({
    data: {
       
        name,
        email,
        image,
        contact,
    }
  });

  return NextResponse.json(user);
}

export async function GET(
  request: Request, 
) {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      },
      where: {
        NOT: {
          email: session.user.email
        }
      }
    });

    return NextResponse.json(users);
  } catch (error: any) {
    return [];
  }
};

