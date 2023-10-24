import { Console, MissionUtils } from "@woowacourse/mission-utils";
import { getComputer } from "./getComputer";
import { getRestart } from "./getRestart";
import { getUser } from "./getUser";
import { getResult } from "./getResult";

class App {
  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    let computer = getComputer();

    while (true) {
      const USER = await getUser();
      let correct = getResult(computer, USER);

      if (correct) {
        const RESTART = await getRestart();

        if (RESTART === 1) {
          computer = getComputer();
        } else {
          break;
        }
      }
    }
  }
}

export default App;
