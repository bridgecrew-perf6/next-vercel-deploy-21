import Link from 'next/link';
import { Mainlayout } from '../../components/layouts/Mainlayout';

const pricing = () => {
  return (
    <Mainlayout>
        <h1>Pricing Page</h1>
        <h1 className={'title'}>
          {/* Welcome to <a href="https://nextjs.org">Next.js!</a> */}
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/pricing/index.jsx</code>
        </p>
    </Mainlayout>
  )
}

export default pricing