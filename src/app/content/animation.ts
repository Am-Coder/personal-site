import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
export const fadeInAnimation =
  trigger('routeAnimations', [
    transition('* => *', [
    
      //   style({ position: 'relative' }),
      //   query(':enter, :leave', [
      //     style({
      //       position: 'absolute',
      //       // top: 0,
      //       // right: 0,
      //       // width: '100%'
      //     })
      //   ]),
      //   query(':enter', [style({ right: '-100%', opacity: 0 })]),
      //   query(':leave', animateChild()),
      //   group([
      //     query(':leave', [animate('1s ease-out', style({ right: '100%', opacity: 0 }))]),
      //     query(':enter', [animate('1s ease-out', style({ right: '0%', opacity: 1 }))])
      //    ]),
      //    query(':enter', animateChild())    

      query(':enter', 
          [
              style({right: '-100%', opacity: 0 })
          ], 
          { optional: true }
      ),

      query(':leave', 
          [
              style({ opacity: 1 }),
              animate('0.5s ease-out', style({right: '100%', opacity: 0 }))
          ], 
          { optional: true }
      ),

      query(':enter', 
          [
              style({ opacity: 0 }),
              animate('0.5s ease-out', style({ right: '20%', opacity: 1 }))
          ], 
          { optional: true }
      )
      

    
    
    ]),      
  ]);