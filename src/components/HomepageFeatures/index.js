import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '고퀄리티 VRChat 에셋',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        VRChat에서 즉시 사용 가능한 최적화 되어있으면서 고품질의 에셋을 제공합니다.
      </>
    ),
  },
  {
    title: '자유로운 커스텀 목표',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        VRChat은 자유로운 커스텀으로 본인의 개성을 표현할 수 있어야 합니다.
        가능한 자유로운 커스텀 옵션을 제공하여 꾸미는 재미를 제공하는 걸 목표합니다.
      </>
    ),
  },
  {
    title: '지속적인 지원',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        VRChat과 Unity 업데이트에 맞춰 지속적으로 지원하여 구매한 컨텐츠를 계속 사용할 수 있도록 연구 및 노력합니다.
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
