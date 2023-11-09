import Image from 'next/image'
import styles from './card.module.css'
import Link from 'next/link'

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {/* {item.Image && ( */}
      <div className={styles.imageContainer}>
        <Image src='/p1.jpeg' alt='' fill className={styles.image} />
      </div>
      {/* )} */}
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <span className={styles.date}>11.02.2023 = </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href='/'>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo
          adipisci doloremque quaerat deserunt ratione repudiandae expedita
          quisquam enim illo incidunt velit dolores, a itaque? Odio ut numquam
          ad facere?
        </p>
        <Link href='/' className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
