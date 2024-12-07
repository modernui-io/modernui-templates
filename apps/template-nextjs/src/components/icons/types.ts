export interface IconProps
  extends Partial<Omit<React.SVGProps<SVGSVGElement>, "stroke">> {
  size?: string | number;
}
