import Link from 'next/link';
import styles from './page.module.css'

export const metadata = {
  title: 'Git Users API',
  description: 'New Next Project'
}

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
		next: {
			revalidate: 120,
		},
	});
	const posts = await response.json();

  return (
    <main className={styles.main}>
      <div className='container'>
        <div className={styles.bodo}>

          <div className='row'>
            {
              posts.map((itm) => (
                <div className='col-md-4' key={itm.id}>
                  <div className={styles.box}>
                    <h4>{itm.name}</h4>
                    <p>{itm.email}</p>
                    <Link href={`/${itm.id}`} className='btn btn-dark'>Show</Link>
                  </div>
                </div>
              ))
            }

          </div>
          
        </div>
      </div>
    </main>
  )
}
