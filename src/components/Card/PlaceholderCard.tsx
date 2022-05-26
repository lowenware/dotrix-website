import { Card } from "./Card";
interface PlaceHolderCardProps {
  className?: string;
}
export const PlaceHolderCard: React.FC<PlaceHolderCardProps> = ({
  className,
}) => {
  return (
    <Card className={className}>
      <></>
    </Card>
  );
};
