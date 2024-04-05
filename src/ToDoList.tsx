import { useState } from "react";

export default function TodoList() {
  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isValidUserId, setIsValidUserId] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsValidUserId(validateUserId());
    setIsValidEmail(validateEmail());
    setIsValidPhoneNumber(validatePhoneNumber());
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log("handleBlur 실행");
    const {
      currentTarget: { id },
    } = e;
    let isValid = true;

    if (id === "userId") {
      isValid = validateUserId();
      setIsValidUserId(isValid);
    } else if (id === "email") {
      isValid = validateEmail();
      console.log(isValid);
    } else if (id === "phoneNumber") {
      isValid = validatePhoneNumber();
      setIsValidPhoneNumber(isValid);
    }
  };
  const validateUserId = () => !!userId.match(/^[\w]{4,20}$/);
  const validateEmail = () => !!email.match(/[a-zA-Z0-9]+@[a-z]+\.com/);
  const validatePhoneNumber = () => !!phoneNumber.match(/[0-9]{10,12}/);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">
            <div>
              <input
                id="userId"
                type="text"
                value={userId}
                placeholder="영어, 숫자, _ 로 구성된 8자 이상 20자 이하로"
                onChange={(e) => setUserId(e.currentTarget.value)}
                onBlur={handleBlur}
              />
            </div>
          </label>
          <div>
            {isValidUserId || (
              <span>영어, 숫자, _ 로 4자 이상 20자 이하로</span>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="email">
            <div>
              <input
                id="email"
                type="email"
                value={email}
                placeholder="이메일을 입력하세요"
                onChange={(e) => setEmail(e.currentTarget.value)}
                onBlur={handleBlur}
              />
            </div>
          </label>
          <div>{isValidEmail || <span>올바른 이메일을 작성</span>}</div>
        </div>
        <div>
          <label htmlFor="phoneNumber">
            <div>
              <input
                id="phoneNumber"
                type="text"
                value={phoneNumber}
                placeholder="-를 제외하고 입력하세요"
                onChange={(e) => setPhoneNumber(e.currentTarget.value)}
                onBlur={handleBlur}
              />
            </div>
          </label>
          <div>{isValidPhoneNumber || <span>- 은 제외하고 숫자만</span>}</div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}
