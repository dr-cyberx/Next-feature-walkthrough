
const session = null;

export default function Home() {

  if(!session) throw new Error('Invalid User!')

  return (
    <main >
      Top Secret Page!!!
    </main>
  )
}
