import { AuthRequiredError } from "@/lib/Exceptions";

const session = null;

export default function Home() {

  if(!session) throw new AuthRequiredError();

  return (
    <main >
      Top Secret Page!!!
    </main>
  )
}
