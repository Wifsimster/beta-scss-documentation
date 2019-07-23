import Vue from 'vue'
import Router from 'vue-router'

// Utils
const Color = () => import('../pages/utils/Color.vue')
const Typography = () => import('../pages/utils/Typography.vue')
const Display = () => import('../pages/utils/Display.vue')
const Position = () => import('../pages/utils/Position.vue')
const Spacing = () => import('../pages/utils/Spacing.vue')
const Width = () => import('../pages/utils/Width.vue')
const Height = () => import('../pages/utils/Height.vue')
const Effect = () => import('../pages/utils/Effect.vue')
const Interactivity = () => import('../pages/utils/Interactivity.vue')
const Animation = () => import('../pages/utils/Animation.vue')
const Rounded = () => import('../pages/utils/Rounded.vue')
const Float = () => import('../pages/utils/Float.vue')
const Overflow = () => import('../pages/utils/Overflow.vue')
const Zindex = () => import('../pages/utils/Z-index.vue')

// Flexbox
const Flexbox = () => import('../pages/utils/Flexbox.vue')
const FlexboxIntro = () => import('../pages/utils/flexbox/Intro.vue')
const FlexboxDirection = () => import('../pages/utils/flexbox/Direction.vue')
const FlexboxWrap = () => import('../pages/utils/flexbox/Wrap.vue')
const FlexboxAlignItems = () => import('../pages/utils/flexbox/AlignItems.vue')
const FlexboxAlignContent = () => import('../pages/utils/flexbox/AlignContent.vue')
const FlexboxAlignSelf = () => import('../pages/utils/flexbox/AlignSelf.vue')
const FlexboxJustifyContent = () => import('../pages/utils/flexbox/JustifyContent.vue')
const FlexboxFlex = () => import('../pages/utils/flexbox/Flex.vue')
const FlexboxFlexGrow = () => import('../pages/utils/flexbox/FlexGrow.vue')
const FlexboxFlexShrink = () => import('../pages/utils/flexbox/FlexShrink.vue')
const FlexboxOrder = () => import('../pages/utils/flexbox/Order.vue')

// Text
const Text = () => import('../pages/utils/text.vue')
const TextColor = () => import('../pages/utils/text/Color.vue')
const TextSize = () => import('../pages/utils/text/Size.vue')
const TextWeight = () => import('../pages/utils/text/Weight.vue')
const TextAlignment = () => import('../pages/utils/text/Alignment.vue')
const TextDecoration = () => import('../pages/utils/text/Decoration.vue')
const TextLineHeight = () => import('../pages/utils/text/LineHeight.vue')

// Border
const Border = () => import('../pages/utils/Border.vue')
const BorderColor = () => import('../pages/utils/border/Color.vue')
const BorderStyle = () => import('../pages/utils/border/Style.vue')
const BorderWidth = () => import('../pages/utils/border/Width.vue')

// Vue
const Transition = () => import('../pages/vue/Transition.vue')

const NotFound = () => import('../pages/NotFound.vue')
const Welcome = () => import('../pages/Welcome.vue')

Vue.use(Router)

let router = new Router({
  routes: [
    { path: '*', component: NotFound },
    { path: '/', component: Welcome },
    {
      path: '/flexbox',
      component: Flexbox,
      children: [
        { path: 'intro', component: FlexboxIntro },
        { path: 'direction', component: FlexboxDirection },
        { path: 'wrap', component: FlexboxWrap },
        { path: 'align-items', component: FlexboxAlignItems },
        { path: 'align-content', component: FlexboxAlignContent },
        { path: 'align-self', component: FlexboxAlignSelf },
        { path: 'justify-content', component: FlexboxJustifyContent },
        { path: 'flex', component: FlexboxFlex },
        { path: 'flex-grow', component: FlexboxFlexGrow },
        { path: 'flex-shrink', component: FlexboxFlexShrink },
        { path: 'order', component: FlexboxOrder }
      ]
    },
    { path: '/color', component: Color },
    { path: '/typography', component: Typography },
    { path: '/display', component: Display },
    { path: '/position', component: Position },
    {
      path: '/text',
      component: Text,
      children: [
        { path: 'color', component: TextColor },
        { path: 'size', component: TextSize },
        { path: 'weigth', component: TextWeight },
        { path: 'alignment', component: TextAlignment },
        { path: 'decoration', component: TextDecoration },
        { path: 'line-height', component: TextLineHeight }
      ]
    },
    ,
    {
      path: '/border',
      component: Border,
      children: [
        { path: 'color', component: BorderColor },
        { path: 'style', component: BorderStyle },
        { path: 'width', component: BorderWidth }
      ]
    },
    { path: '/spacing', component: Spacing },
    { path: '/width', component: Width },
    { path: '/height', component: Height },
    { path: '/effect', component: Effect },
    { path: '/overflow', component: Overflow },
    { path: '/interactivity', component: Interactivity },
    { path: '/animation', component: Animation },
    { path: '/float', component: Float },
    { path: '/zindex', component: Zindex },
    { path: '/rounded', component: Rounded },
    { path: '/transition', component: Transition }
  ]
})

export default router
