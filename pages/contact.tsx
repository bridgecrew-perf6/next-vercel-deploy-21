
import { Mainlayout } from '../components/layouts/Mainlayout'
import Link from 'next/link';

const contact = () => {
  return (
    <Mainlayout>
        <h1>Contact Page</h1>
        <h1 className={'title'}>
          {/* Welcome to <a href="https://nextjs.org">Next.js!</a> */}
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact.jsx</code>
        </p>
    </Mainlayout>
  )
}

export default contact