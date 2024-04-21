import { useNavigate } from "react-router-dom";
import "../../style/Home.css";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Home() {
  const [transitionLogo, setTransitionLogo] = useState(false);

  const navigate = useNavigate();

  const { ref, inView } = useInView({
    threshold: 0.7,
  });
  const { ref: refSocialMedia, inView: viewSocialMedia } = useInView({
    threshold: 0.7,
  });

  useEffect(() => {
    setTransitionLogo(true);
  }, []);

  return (
    <>
      <img
        className="homeBackground"
        src="/homeBackground.jpg"
        alt="PersonRunning"
      />
      <div className="homePageContainer">
        <div className="pictureText">
          <div className="getContainer">
            <div className="getDiv">
              <p className="getText typingText1">Get fitter...</p>
            </div>
            <div className="getDiv">
              <p className="getText typingText2">Get bigger...</p>
            </div>
            <div className="getDiv">
              <p className="getText typingText3">Get stronger...</p>
            </div>
          </div>
          <div className="logoContainer">
            <p className="logoText">
              <span
                className={`beforeBe ${transitionLogo ? "transitionBe" : ""}`}
              >
                be
              </span>
              <span
                className={`beforeBetter ${
                  transitionLogo ? "transitionBetter" : ""
                }`}
              >
                BETTER
              </span>
            </p>
          </div>
        </div>
        <div className="introductionText">
          <p
            style={{
              fontSize: "40px",
              textShadow: "2px 2px 1px #22d1dc60",
            }}
          >
            BE BETTER
          </p>
          <p style={{ fontSize: "20px", marginTop: "40px" }}>
            Be better is an online shopping store providing its customer top
            notch high quality fitness equipment, supplements, accesories and
            much more. It is a one way stopping point for anyone that does
            sports, fitness or just wants to live a more healthy life.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              margin: "50px 0",
            }}
          >
            <div
              className={`homeImages ${inView ? "intersectHomeImages" : ""}`}
              ref={ref}
            >
              <img
                height={60}
                width={60}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVR4nO2YUQ6DIBBE58s71V7Ai1nba1rpNWjSrImhIbBAFey8hERRhwzM7ocAIYQQQlR0AB4AXgDsZhgAkzyvQTPI3VnMHbdKNIMYEb848/1mF2vQDLLukvbZ3prB3B5lxKbWTii3Rxqxmtrx5baGaPWa2vGJ12BEtRaNQA9PBGeO1gDgGdFmU1tlzEgxYmXM4uFzYRs2YsXD1wetRcuu9zSygSeCgtGaz1Lsg8dMc+3XpbWu5YVGoIcngoxdaq5GjLzYF1g0hFbzKnNLjPhUsFWGSG3pY4x4J2ZMhUYWMZH1K7WGaBXBVzuq3O6gmV07YyWaybWTk9tfaBJCCCH/yxukU+uYZJeLVgAAAABJRU5ErkJggg=="
                alt="Dumbbell"
              />
              <p style={{ fontSize: "18px", color: "#22d1dc" }}>Equipment</p>
            </div>
            <div
              style={{ marginTop: "50px" }}
              className={`homeImages ${inView ? "intersectHomeImages" : ""}`}
              ref={ref}
            >
              <img
                height={60}
                width={60}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAACZElEQVR4nO2azWoUQRCAv4vZg4Y1etNAclNfIuI12cPiQe9hRYj4ACbgCwk+gOJBQyTJEiTHaMBAcja4uWRPLQ010oxudibb0z+79UHB/sxM/UxXd1HdoCiKoiip0QH2gSFgxshQrl1jipw315QuU0BfnHkDzFW43l6zKffsMQUMxRnr2A6w7fw36ntL7rlkCjAi5c/jvpf/yxYzywHYmWACLMRNkewwniRbzIQOZBeAeeAF8A449jgCjuWZPeAWCTIHbAEXHp0eJQOpKW6QCIvAoWPgB3lTD4CbHp5vn/FQRtZHR8834B6RWQZOxKAjYCWAzsfAd9H5E1giEi2nzP0MLATUfQf44pTLVUps77x13nxI590g/BAb7PwTlNvAuSgPMexH8URs+AW0QyruORNebD6JLeshlb4XpTYQsXkpttg6IRhF7tmlLjaPnLnIS1uqSkuqKHhs5RebeadA8t6W6mZSo4+1p1+jLVWlJWUSlUptqSqMa0llFwBzjSF71T3ZpYCZxQB0amxG1F0Vkg9Ap6Ec6+YSgH7NzYi6q0LyARjWnPXrrgrJB8A0YKD7zGwCYBpaazUAZDICfJLlCPCJBgAdAWgK8G86pIDOAegkiK4CV+aE5zzTOYBmy+1JyvSgIyA1+YumAM1G2cx6AC4S2hlqiy2/Q6bArnx+Snyeiy1fQ7bEXjsbkvagQizuAmdiy8b/mqKbnpqiW6WmaEsOKdnfToFngQ8otOXNF84flP3sNJT/q46O+04QYsrBqNNia/LGfGyM7JWcL7BRfyX5Nwjo9EDOIW/EOiClKIqiKKTHH1hOHmevZ8e5AAAAAElFTkSuQmCC"
                alt="Supplements"
              />
              <p style={{ fontSize: "18px", color: "#22d1dc" }}>Supplements</p>
            </div>
            <div
              className={`homeImages ${inView ? "intersectHomeImages" : ""}`}
              ref={ref}
            >
              <img
                height={60}
                width={60}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEcklEQVR4nOWba4hWRRjHf+tlu1gmFVJEYvolSSrKJEvKcrPIoChISjJZ3IjIokDSLCroS3Sh0qUQFSGi8kNSSTftQ1Z0M7uYXaTFlbQLmbVuhW5rbzzwPzC8uOOe8545M7v7h4eFd+c8/+f8z8wzc2aeA+HxNlDLaVuAJgYJ/ioggNkoBpkAowK1H9A94CW1OQL4brD2gDc9AryoNs3At87vmwdTDsjTrQdk9z8WuAxYCqwBNukJdsgsox/Ujd0HzACOGegCjABuAN4ADhTI8HbNa8Bcdf8BI0AzcKuebHYz/+optwPzgSuBacDpsmn6bb7afA70OtfvAu4ERqYuwJnAl07g24DbgeMK+BoDLAS+cfx9DfSkKkAbsF/BdQKzS/Jrmf4qYGfKU+A9wH+ydk8CazSRtovDBFhMIljgjPPWCvhaxVVTr4uKs5wMb0JUhTZx2pA7m4h433n6HY59pexuuBbYXvf/MizrBR/EFKDWhx3UYibLD7XAFl2ACXU2tq7dqYdoU4YlI8BQ5Sd2ALH5iR1AbH5iBxCbn30KYEagJOezS8TdFVOANRVMcYezVTEFOAp4wlmUdAZY8NRbp7P4ehw4kgSwU0GNr4BrvCN2MtiioM6tgGuKuD4jIWxQULMq4LpcXHaalAxeUFC2BxgaN4rLOJPBcgVl21+hsVBcxpkMHlJQD1TA9aC47G8yuMMzT+8GTiyR62n5Nc5kMNcjwI/ACSVyPS+/xpkMrlBQdsYXGm+Jy2aDZHCegvq0Aq7N4rL1QDKYoKB2VMC1Q1ynkRDGeHKArdnnlcjVJb9FTpuCYZhzZFVvPSUmrGbHZ3K1Ab8quJMCcpwsjp9JENsU3BkBOSY7h6TJYZOCuyggx8XieJcEsc6TCD8qieMa+XuZBLHSI0BZx1fjgPeA60gQj6R2bF01FkmARwP5P147TtN18DqcxNAqAVaX6LNJi6hs+evan8AKDYskcLUnB1iwk3L6OxpY6/j4B/gC+BD4yfl9L9BCApjuEWCvUy/Q3yefzSq/q3fZFrwLK4xYrzZWpDGVyJikYKyet1HcJF/7DtNzTKhlartdZXTRMFaB/FbCe8X38jWvnwWZW9X+ZiJihCq4enUTRXGObqZLmx4tHrMaJSRUtt5oKWinlCHCH56SGasT7g/uznk2OEV7jrUG7ZcyBPihD+fWK5bk3PXt0IGLz9ZqL6LJ4dqQw6zIq9u5tmF8LEfnV7ztnQlgQ9CHidqbsJ3lT+r2MCzhNozX5Wx2AgJYZemlGnqvOvsV9T3TapufdaraGsJzObJ3KAFWqE6xt49x/oqGo++bhMJ40pNk/gYuDCyAawf0Gv6UzhMr2US93yNAt74LCC3AXcAFsQonblMQzySaBIPjegVi09OQFGCmAnlnqAowuYQXonvl47Ec14x2ls9RMRzYo2DaCr6dzXKmrKn9OADJviTJVoHRcUvBtXi3DlnRXJ33+p6UDkznqIqrr+OyQ5ktRbMbsO+EH9Y7fvaNkO+6jSFv/n8au6jFHBiBHQAAAABJRU5ErkJggg=="
                alt="FitnessAccessories"
              />
              <p style={{ fontSize: "18px", color: "#22d1dc" }}>Accessories</p>
            </div>
          </div>
          <p style={{ fontSize: "20px", marginTop: "60px" }}>
            We value all of our customers, from gyms to non-professional
            customers, in our store there is something for anyone.
          </p>
          <div>
            <p
              className="actionButton"
              style={{ fontSize: "20px", marginTop: "40px" }}
            >
              Take a look at our product line
            </p>
            <button
              className="seeProducts"
              onClick={() => {
                navigate("/products");
              }}
            >
              See products
            </button>
          </div>
          <div
            className="socialMediaContainer"
            style={{ fontSize: "20px", marginTop: "70px" }}
          >
            <p>
              Want to get in touch? Follow us on social media to get notified
              about discounts or any new updates in our store and our brand!
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "rows",
                justifyContent: "space-around",
                alignItems: "center",
                margin: "70px 0",
              }}
            >
              <img
                className={`homeSocialMedia1 ${
                  viewSocialMedia ? "intersectSocialMedia1" : ""
                }`}
                style={{ cursor: "pointer" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADFElEQVR4nO2aXYiNQRjHf47Fsliu7C5LW7ZordwRKa6PQkrulAuXSj5iXVoKuZGS0iYuXHDlRqlVy0pprQtWrM8QV5L9sGutfTX6T03TOfZ9OWffeev8azrnmed5533+Z56ZeWbmQAUVVPCv2AJ0AkNAlHIZlC/5pCTaA3A+KlKOJ+kJ88AocBCoJ33Uy5dR+RarZ+7I2DwYGg7LNxNmk2JQxnWEhzr5NhDH2MZiqIji+lcOIrcLDNpuIJc1IsNFZqCWrBH5rjbnSD4p+UDWiawGJoD3QE0Wicx26q6r7lrCsRKlSWSkAJFFwDvV3wQaskSk2qtvBvqlMzndVWAv0BgqEZtazCqgmweccRbiCHgVKpEfHhGzrtwVCYv5wC6nd4ImMtN7xy1grmNXEzqRMbU5w3uHKS+AHUBVCESWAkeALuCjeuBGDCK9zvevwIO0iJjp9KwzmP1i8VNylfcOQ2wf8MZ77u1UEjEp9UPZTijedwNrCrQxLnn6X95h8q5twB5g+VQRMalGj/PrbZykjThE4qKkRM7L5qWzAavS9Hm5QBu/JOdCItKswWvivlV1jd7ANeVz6ETapb/khFmfM5WaGF/rbZUnpJ8WEpHH0m+WvF9yn5Om+wiSyKD0dh/RJXlngjZTJ1ItnclmLfon2bbmpDfjBM1ckWayVHtkSHobRt2StxexXyW92Q3awzYjf0rmf+mJPJF+g+Q2yT1OCoLz63dKf0F1ecn34jhTTiKnpD8nuRb44JDZCqxUD9mV/wuwRPZXVHc0bSItim8zTppU1+qQiQqsJ+scu3HlZsvSJmLQIZtHzuxleuYYcB94rdAxYbdQ+gXAcz1nEk1CIFILPHPI2J4phhWOfY93CJEUUamz3ybHuRGNmfWOk+ZzE3DR2Y/0JjgtmTIitmc6nFzKFv+Wa0yJZrGVP3Ui7lpxGnjqHMYNK505oUSzVIjKScRH0mPQJIji+jcgwxCu3Hwslm/fiAG7Eh8i41dveRmPisz/zjKlQINIJLoMRVfAUdavpy3y6kL3TDZzfxiooIIK+IPfupUke82dgmkAAAAASUVORK5CYII="
                alt="TikTokLogo"
                ref={refSocialMedia}
              />
              <img
                className={`homeSocialMedia2 ${
                  viewSocialMedia ? "intersectSocialMedia2" : ""
                }`}
                style={{ cursor: "pointer" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2ZO09UQRTHfwUqRB67lksrgrEQBTsfsZOYqHwCQlS+gApS+2iNhFKDX0AxsZLFZ6f2Itio2AoKCBWuOcn/JhMDu3Mfu3NN9p9McrP3nHPn7Jz3QBNN5AK9wAQwDywAG0Alo2WyTGYZGAcO1UOBQeBFhpv2XfPAQBYK7AGmgT8S/AN4AFzQ6ewnO5gsk3kReKhvVfTtKaAlqeAi8FLCfgO3gE4ah07gNrDpnE4hyUlEpvRdphUKR4Ev2ssbYG8c5mkxfgNKhEcJWNae7vsyDcouzZyOkR8cl5lt67kmIpMyn8gb7mhvFqKroteJTo107Ajn5ZNmRkM7vO8CVrTHnmqCJkRk4S8Elp0cYv65E2b0/kY1QWURWSzPqyLDej9XTdCiiNKUB5Z/RoGnwCeVHht6ntU7o9kJQ1LGlDhXw/xN3q5YE1FHAgXagEngp0fpsQrcBFoTfKdDMmyvuyL6UJI4/8Hhfw5cccoYW336bc6he58wT1Vq7TOJIiWZQnTcJz14TjlmnCTpVrJWpM05iVcxayHzk9fifRfTzCpZKzIp+oUkBZ2UiU7GQn8QRYqOY/uY02444wSAYghFRh3HTosof42EUGRWtJdJj6uS9TiEIpFtW4hNiz6fJFcvRdZF2056tEvW+v+uSKdk/fKkb5pWNWe3siMtxkI6+6hPOe2J+ZDht6gkZvSnSY6zTkIshC5RFmNkZRfGs+TT8dVbkVaV4hUVgHGUOQC8zUvR+G8Zv6TaycecPuepjI9Q0r8a8ZcViQ4rz7Trecxx7Ogk6tJYraVodVtViq96trp2dbCvXq3uYgbDh4LC6BP1KetaC/ptJGHvEmv4EHoc5INhn/ZhPPCAzgePtMdreR6Z1oL3yBQnqtglS95wN05XOqBrhU3f8X2DMAhs6Vqh35dpSprb+LKb8Oh25sL34jC2OCZmY/4ThEM/8NVJtLEvRQuOMpu6ZDFnaxS65BNbTruQOP+06M5uW8JWdD9xSQODLNrcCCarT3lixolO2zKnxNfTLo4AzzxKj6xXuV4Bp0d9w5xTfmS1aZP1UaH1OnCwHgo00QTx8Bf0wax6bwlEYQAAAABJRU5ErkJggg=="
                alt="InstagramLogo"
              />
              <img
                className={`homeSocialMedia3 ${
                  viewSocialMedia ? "intersectSocialMedia3" : ""
                }`}
                style={{ cursor: "pointer" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEJ0lEQVR4nO2ZW4hVVRzGf95GULN0VFAnrcYgTGUgfOlF0TRHMZ3JlHySvKD44Is6+pAk3kYQDDQiesrwjoaOUTBQiaSYaIqIir6Ygngb71fGmfjDt2GxOfu+55zzMB8sOJz9X9/a31lr/W8HOtGJskcfoBZoBJqAS0AL8ErDPl8EDgObgCmaUxboopffB7wA2hOO58AeiTKukmAWcM55qVbgb2A9UA+MBPoBPTTs84d6tgE4rjne/LNAXTEFjACanRe4BqwAhqTgGgqsBP5z+H4H3qODMRd4pAVvAQv0a2dFBbAIuCPuh8AcOgBddGS8X22Hjkre6A/sdNZZm7eI70T8EviKjscieTpbc1tepN5OPAE+pXioBZ7mtTNznZ3IQ0S1XK3xfgl8AUwGPgIGBojxdmZ2Fu/kXewsx8nu0hqfZwoaNQHHzJ49SOvNmp2LnRZjgRvOi94EftOF3qlA+qdzhGoCeDwHYHMTBzvPxab1Th8Aj8VzFPg4xPbfCCGVjmuekcRLeRHb4kQaGMdpcewCukfYRwkxLJbNmbjpTK0TsdMGu8kOR+8CzwcA44FPNK7GEFIBXJddLMezT8aWOqTFTyEcq0MSzJoI3lWy2x31Am8oI21NmTt5uKIFx/i+n6PvXynBbPaN6gjet4HXwDOgV5xjZYukRYUTe7r5np3Ss6UZ+E+Kw45vIBplZNE8LQY5Hs8v8LV2I0tBtUn8G8OMmmRkNUNaVIvDLrCLKn1vcSULZonnUJjRZRlZAZQlI2jXPfHHlXaVu1kwKg7PPRlZOl2uQgaIxwJkIF7KyM5zHMxUU8EdDyKEtBaY442xMdbsKR5z4YHwMs24gXB2SAIYJCRsVCb0ioFokdFbCYX8opzMHW/6bLsVsOmnJoVx3I65Zn/Z3w0zuiSjUQmF7CU9JojjWEz70bK/EGZ0REZ1RRSyRBw/xrSvl701+gKxIU6wKSDEsuUG37CCyEVlAZsG1SPGsTzmmptlvy7MaJqMTpTgsk9PmKKEZsC9Va21qXkWhTFKa9zxQ4SQuwXm2BgcY70qvduTqKTRsD9jvtWRAXF9kjs5ySn2/S60lEL6AvfFYZ4uElZGnk94AYshpEHzrSyOjc+cXRleBkKqnGBtNVOqdtAfQNcSCukK/OV06hPjHadBZ9taKiGrndNhpW4qzJS7a1MELraQ+aoq27K0TD2s1QsY4bwiClkoATbnG3LCt46Yxog0P6uQHqrLPRFbyBnLHPJTeuG8hbyrDk671sptJ/z43AlKz7RTg3MQYj20rU4zuyVjAyQWhjvdFk/QdmCciqckQqy0/d7XeWwChlFETAX+8WWw1rz4NULIbbVUr/nmGpdxlgy2Ez87MSdJGv9Y/79YQ7tsYE2BicDXwMECf8q8r2N1QP9gTUjQrelEJygR/gf1aciEOXd4dAAAAABJRU5ErkJggg=="
                alt="FacebookLogo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
