import { Component } from '@angular/core';

@Component({
    selector: 'shape-root',
    templateUrl: './shape.component.html',
    styleUrls: ['./shape.component.scss']
})
export class ShapeComponent {
    text: string = 'My first Angular component!';
    shapeContainer: string = 'shape-container';
    doMath(): number {
        return 4 + 4;
    }
}