import Image from "next/image";
import { getServerSession } from "next-auth/next";
import {options} from './options';
import Form from "./Form";
import Card from "./Card";

export default async function Home() {
  const serverSession = await getServerSession(options);
  return (
    <>
      {
        serverSession ? <Card user={serverSession.user?.name} /> : 
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-blue-500 text-4xl mb-8">Login</h1>
      <Form />
    </main>
      }
    
    </>
  );
}
