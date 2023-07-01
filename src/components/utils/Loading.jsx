import loading from '../../assets/loading.gif';
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={loading} alt='data is loading..' />
    </div>
  );
}

export default Loading;