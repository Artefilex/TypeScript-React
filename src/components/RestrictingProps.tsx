type RandomNumbers = {
  value: number;
};
type PositiveNumber = RandomNumbers & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = RandomNumbers & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};
type ZeroNumber = RandomNumbers & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumbersProps = ZeroNumber | PositiveNumber | NegativeNumber;
export function RestrictingProps({
  value,
  isNegative,
  isPositive,
  isZero,
}: RandomNumbersProps) {
  return <div> {value} {isPositive && "positive"} {isNegative && "negative"}  {isZero && "zero"}   </div>;
}


