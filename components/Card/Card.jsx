import classes from './Card.module.css'

export default function Card() {
  return (
    <div className={classes.card}>
      <header className={classes.card_header}>
        <img
          className={classes.card_image}
          src="/images/image-header-mobile.jpg"
          href="women working on a table"
        />
      </header>
      <main className={classes.card_body}></main>
    </div>
  )
}
