/**
 * 
 *  JSX优势：template 则因为语法限制原因，不能够像 JSX 那样可以支持更动态的需求。这也是 JSX 相比于 template 的一个优势。
 *  JSX 相比于 template 还有一个优势，是可以在一个文件内返回多个组件。
 * 
 * 可以两个都要😄
 * 在实现业务需求的时候，优先使用 template，尽可能地利用 Vue 本身的性能优化。
 * 而对于动态性要求较高的组件可以使用 JSX 来实现
 */

function render() {
  return <div>hello from jsx 😄 惊喜不</div>
}

export default render