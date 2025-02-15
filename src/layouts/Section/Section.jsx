import classNames from 'classnames'
import './Section.scss'

const Section = (props) => {
  const {
    className,
    title,
    titleId,
    description,
    actions,
    isActionHiddenOnMobile = false,
    children
  } = props

  return (
    <section 
      className={classNames(className, 'section container')}
      aria-label={titleId}
    >
      <header className="section__header">
        <div className="section__info">
          <h2 id={titleId} className="section__title h3">
            {title}
          </h2>

          {description && (
            <div className="section__desctiption"><p>{description}</p></div>
          )}
        </div>
        
        {actions && (
          <div 
            className={classNames('section__actions', {
              'hidden-mobile': isActionHiddenOnMobile
            })}
          >{actions}</div>
        )}
      </header>

      <div className="section__body">
        {children}
      </div>
    </section>
  )
}

export default Section