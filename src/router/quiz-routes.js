export default {
  path: '/quiz',
  name: 'Quiz',
  component: () => import('@/views/Quiz.vue')
  // children: [
  //   {
  //     path: '',
  //     component: DogList
  //   },
  //   {
  //     path: 'new',
  //     component: Dog
  //   },
  //   {
  //     path: ':id',
  //     component: Dog,
  //     props: true
  //   }
  // ]
}
