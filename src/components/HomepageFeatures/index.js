import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bon dia',
    Svg: require('@site/static/img/bondia.svg').default,
    description: (
      <>
        Bon dia pel mati
      </>
    ),
  },
  {
    title: 'Bona nit',
    Svg: require('@site/static/img/bonanit.svg').default,
    description: (
      <>
        Adeuuuu
      </>
    ),
  },
  {
    title: 'Ja es nadal',
    Svg: require('@site/static/img/bonnadal.svg').default,
    description: (
      <>
        Merry christmass
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
