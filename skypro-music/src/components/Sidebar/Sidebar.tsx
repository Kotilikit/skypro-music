import Link from "next/link";
import styles from "./Sidebar.module.css"
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className={styles.mainSidebar}>
            <div className={styles.sidebarPersonal}>
              <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
              <div className={styles.sidebarIcon}>
                <Link href={"/signin"} >
                <svg>
                  <use xlinkHref="img/icon/sprite.svg#logout" />
                </svg>
                </Link>
              </div>
            </div>
            <div className={styles.sidebarBlock}>
              <div className={styles.sidebarList}>
                <div className={styles.sidebarItem}>
                  <Link className={styles.sidebarLink} href="/tracks/category/1">
                    <Image
                      className={styles.sidebarImg}
                      src="/img/playlist01.png"
                      alt="day's playlist"
                      width={250}
                      height={150}
                    />
                  </Link>
                </div>
                <div className={styles.sidebarItem}>
                  <Link className={styles.sidebarLink} href="/tracks/category/2">
                    <Image
                      className={styles.sidebarImg}
                      src="/img/playlist02.png"
                      alt="top 100"
                      width={250}
                      height={150}
                    />
                  </Link>
                </div>
                <div className={styles.sidebarItem}> 
                  <Link className={styles.sidebarLink} href="/tracks/category/3">
                    <Image
                      className={styles.sidebarImg}
                      src="/img/playlist03.png"
                      alt="indi"
                      width={250}
                      height={150}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
  );
}
