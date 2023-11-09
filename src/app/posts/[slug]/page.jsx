import Image from 'next/image';
import styles from './singlePage.module.css';
import Menu from '@/components/menu/Menu';
import Comment from '@/components/comments/Comment';
const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src='/p1.jpeg' alt='' fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Simon Yoo</span>
              <span className={styles.date}>01.11.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src='/p1.jpeg' alt='' fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              nulla hic maiores vel neque commodi optio autem. Eaque optio
              placeat doloremque expedita in illum. Quisquam consequuntur ipsa
              perferendis amet adipisci.
            </p>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              nulla hic maiores vel neque commodi optio autem. Eaque optio
              placeat doloremque expedita in illum. Quisquam consequuntur ipsa
              perferendis amet adipisci.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              nulla hic maiores vel neque commodi optio autem. Eaque optio
              placeat doloremque expedita in illum. Quisquam consequuntur ipsa
              perferendis amet adipisci.
            </p>
          </div>
          <div className={styles.comment}>
            <Comment />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
