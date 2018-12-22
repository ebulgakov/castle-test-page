declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.svg' {
  const value: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  export default value;
}


declare module '*.jpg' {
  const content: string;
  export default content;
}
