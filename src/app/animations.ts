import { trigger, query,group,animateChild, transition, style, animate } from "@angular/animations"
export const slideInAnimation =
  trigger('routeAnimations', [
    transition('GreetPage <=> GamePage', [
      style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ]),
      query(':enter', [
        style({ transform:'translateX(100%)'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('3000ms ease-out', style({ transform:'translateX(-100%)'}))
        ]),
        query(':enter', [
          animate('3000ms ease-out', style({transform:'translateX(0%)'}))
        ])
      ]),
      query(':enter', animateChild()),
     ])
    //,
    // transition('* <=> FilterPage', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ]),
    //   query(':enter', [
    //     style({ left: '-100%'})
    //   ]),
    //   query(':leave', animateChild()),
    //   group([
    //     query(':leave', [
    //       animate('200ms ease-out', style({ left: '100%'}))
    //     ]),
    //     query(':enter', [
    //       animate('300ms ease-out', style({ left: '0%'}))
    //     ])
    //   ]),
    //   query(':enter', animateChild()),
    // ])
  ]);