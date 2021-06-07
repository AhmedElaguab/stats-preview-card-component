import classes from './Card.module.css'

export default function Card() {
  return (
    <div className={classes.card}>
      <header className={classes.card_header}>
        <div className={classes.card_overlay} />
        <img
          className={classes.card_image}
          src="/images/image-header-mobile.jpg"
          href="women working on a table"
        />
      </header>
      <main className={classes.card_body}>
        <h3 className={classes.card_title}>
          Get <spna className={classes.card_title_highlight}>insights</spna>{' '}
          that help your business grow.
        </h3>
        <p className={classes.card_para}>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer, experience, and overall efficiency.
        </p>
      </main>
    </div>
  )
}
