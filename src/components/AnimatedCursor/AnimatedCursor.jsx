import AnimatedCursor from 'react-animated-cursor';

const AnimatCursor = () => {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={20}
      color="255, 117, 29"
      outerAlpha={0.3}
      innerScale={1}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
      ]}
    />
  );
};

export default AnimatCursor;
