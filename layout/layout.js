import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className="flex bg-blue-400 py-10 ">
      <div className="m-auto bg-slate-50 rounded-md w-10/12 max-w-[1300px]  lg:w-[70%]  grid lg:grid-cols-2">
        <div className={styles.imgStyle}>
          <div className={styles.cartoonImg}></div>
          <div className={styles.cloud_one}></div>
          <div className={styles.cloud_two}></div>
        </div>
        <div className="right flex flex-col ">
          <div className="text-center py-10">{children}</div>
        </div>
      </div>
    </div>
  );
}
