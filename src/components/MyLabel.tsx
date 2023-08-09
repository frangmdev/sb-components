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
}

export const MyLabel = ({
    label = 'No Label',
    size  = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor,
}: MyLabelProps ) => {
  return (
    <span 
      className={ `label ${ size } text-${ color }` } 
      style={{ color: fontColor }}>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
