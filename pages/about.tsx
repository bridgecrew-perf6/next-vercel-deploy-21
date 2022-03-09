
import Link from 'next/link';
import { Mainlayout } from '../components/layouts/Mainlayout';


const about = () => {
  return (
    <Mainlayout>
        <h1>About Page</h1>
        <h1 className={'title'}>
          {/* Welcome to <a href="https://nextjs.org">Next.js!</a> */}
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.jsx</code>
        </p>
    </Mainlayout>
  )
}

export default about