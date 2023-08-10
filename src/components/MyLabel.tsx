import './mylabel.css';

export interface MyLabelProps {
  /**
   * Texto que aparecera en la etiqueta
   */
    label: string;
  /**
   * Tamaño de la etiqueta
   */
    size: 'normal'|'h1'|'h2'|'h3';
  /**
   * Color de la fuente
   */
    color?: 'primary'|'secondary'|'tertiary';
  /**
   * Capitalizacion de la fuente
   */
    allCaps?: boolean;
  /**
   * Color personalizado
   */
    fontColor?: string;
  /**
   * Color personalizado
   */
    backgroundColor?: string;
}

export const MyLabel = ({
    label = 'No Label',
    size  = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor,
    backgroundColor = 'transparent'
}: MyLabelProps ) => {
  return (
    <span 
      className={ `label ${ size } text-${ color }` } 
      style={{ color: fontColor, backgroundColor }}>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
