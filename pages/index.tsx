import type { NextPage } from 'next'
import Layout from '../components/layout/Layout';
import data from '../json/data.json';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex">
        {data.rows.map(row => (
          <div key={row.symbol} className="p-4">
            <p className="text-gray-500 text-xl">{row.symbol}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Home
