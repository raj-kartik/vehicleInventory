import { Card, Grid, Img, Label } from "../../style/ProductAccessories";

export function OptionGrid({ items }:any) {
  return (
    <Grid>
      {items.map((item:any, idx:number) => (
        <Card key={idx}>
          <Img src={item.image} alt={item.label} />
          <Label>{item.label}</Label>
        </Card>
      ))}
    </Grid>
  );
}
