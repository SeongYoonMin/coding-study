// 문제 2. 게임 캐릭터 클래스 만들기(20번째 강의)

// 아래의 코드는 게임 캐릭터 클래스를 만드는 코드입니다. 코드를 완성해주세요.
class Wizard {
  constructor(health, mana, damage, armor) { // 생성자 함수를 통해 args를 통해 받아온 값을 Wizard의 프로퍼티에 할당
    this.health = health;
    this.mana = mana;
    this.damage = damage;
    this.armor = armor;
  }
  attack() { // attack 메서드를 통해 "파이어볼"을 출력
    console.log("파이어볼");
  }
}

const x = new Wizard(545, 210, 10, 5);
console.log(x.health, x.mana, x.damage, x.armor); // 545 210 10 5
x.attack(); // "파이어볼"
