import { Brand } from '../../common/type';

export type Area = Brand<string, 'Area'>;

/**
 * TODO: not implemented
 *
 * Determine area name such as "tokyo", "shibuya" by coordinates.
 *
 * @param coordinates
 */
export const getArea = (coordinates: Coordinates): Area => {
  return '' as Area;
};

export class Location {
  readonly area: Area;
  private readonly coordinates: Coordinates;

  constructor(coordinates: Coordinates) {
    this.area = getArea(coordinates);
  }
}
