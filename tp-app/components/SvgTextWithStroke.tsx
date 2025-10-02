import React from 'react';
import { Svg, Text } from 'react-native-svg';

interface SvgTextWithStrokeProps {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  textAnchor?: string;
}

const SvgTextWithStroke: React.FC<SvgTextWithStrokeProps> = ({
  text,
  fontSize = 16,
  fontFamily = 'LuckiestGuy-Regular',
  fill = '#ffffff',
  stroke = '#000000',
  strokeWidth = 2,
  x = 0,
  y = 0,
  width = 41,
  height = 20,
  textAnchor = "start",
}) => {
  const textY = y + fontSize * 0.8; // Adjust y position for proper text baseline
  const textX = textAnchor === "middle" ? width / 2 : x;
  
  return (
    <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      {/* Background stroke text */}
      <Text
        x={textX}
        y={textY}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth * 2}
        textAnchor={textAnchor}
        dominantBaseline="hanging"
      >
        {text}
      </Text>
      {/* Main text on top */}
      <Text
        x={textX}
        y={textY}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fill={fill}
        stroke="none"
        textAnchor={textAnchor}
        dominantBaseline="hanging"
      >
        {text}
      </Text>
    </Svg>
  );
};

export default SvgTextWithStroke;
