import Image from 'next/image';
import styles from './comments.module.css';
import Link from 'next/link';
const Comment = () => {
  const status = 'authenticated';
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea placeholder='write a comment...' className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href='/login'>Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt=''
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.user}>Simon Yoo</span>
              <span className={styles.date}>01.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            voluptatem eos distinctio quo modi. Assumenda quam reiciendis autem.
            Consequatur libero ducimus corporis ipsum deleniti? Numquam tenetur
            totam itaque suscipit quibusdam.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt=''
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.user}>Simon Yoo</span>
              <span className={styles.date}>01.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            voluptatem eos distinctio quo modi. Assumenda quam reiciendis autem.
            Consequatur libero ducimus corporis ipsum deleniti? Numquam tenetur
            totam itaque suscipit quibusdam.
          </p>
        </div>{' '}
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt=''
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.user}>Simon Yoo</span>
              <span className={styles.date}>01.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            voluptatem eos distinctio quo modi. Assumenda quam reiciendis autem.
            Consequatur libero ducimus corporis ipsum deleniti? Numquam tenetur
            totam itaque suscipit quibusdam.
          </p>
        </div>{' '}
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt=''
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.user}>Simon Yoo</span>
              <span className={styles.date}>01.11.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            voluptatem eos distinctio quo modi. Assumenda quam reiciendis autem.
            Consequatur libero ducimus corporis ipsum deleniti? Numquam tenetur
            totam itaque suscipit quibusdam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
