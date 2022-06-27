import Button from "./button";
const App = () => {
  return (
    <div>
      <h3>Hello this is Bikash Rai</h3>
      <h2>Which website do you want to check?</h2>
      <Button name="ideaAutomate" link="https://ideaautomate.com/" />
      <Button name="Bootstrap" link="https://getbootstrap.com/" />
      <Button name="Facebook" link="https://www.facebook.com/" />
      <Button name="Github" link="https://github.com/bikashsrai" />
      <Button name="php" link="https://www.php.net/" />
      <Button
        name="Youtube"
        link="https://www.youtube.com/watch?v=afRFR2UNYzI&list=PLefAmOeLodvLYxjoLQ-_6H0cwWunHOkiE&index=2"
      />
      <Button
        name="React"
        link="https://reactjs.org/docs/add-react-to-a-website.html"
      />
      <Button name="WordPress" link="https://wordpress.org/support/" />
    </div>
  );
};
export default App;
