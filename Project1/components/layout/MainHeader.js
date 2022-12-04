import Link from 'next/link';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header classeName={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav classeName={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainHeader;
