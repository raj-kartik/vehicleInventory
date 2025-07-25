import styled from "styled-components";
import { FaHome, FaBell, FaGlobe, FaLightbulb } from "react-icons/fa";

// Header container and blue bar
const HeaderRoot = styled.header`
  width: 100vw;
  min-width: 320px;
  background: #101327;
  box-shadow: 0 2px 24px #0004;
  position: relative;
  z-index: 10;
  padding: 0;
`;

// Highlight bar
const HeaderHighlight = styled.div`
  width: 100%;
  height: 54px;
  background: linear-gradient(90deg, #646fe6 0%, #5e84ed 100%);
  display: flex;
  align-items: center;
  padding: 0 2.5vw;
  @media (max-width: 700px) {
    height: 44px;
    padding: 0 3vw;
  }
`;

// Section: left (icon + title + breadcrumb)
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderIconBox = styled.div`
  background: #686bce;
  width: 42px;
  height: 42px;
  min-width: 42px;
  min-height: 42px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  box-shadow: 0 1px 8px #4646ac33;
  @media (max-width: 700px) {
    width: 34px;
    height: 34px;
    border-radius: 8px;
    min-width: 34px;
    min-height: 34px;
    margin-right: 11px;
  }
`;

const HeaderTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderMainTitle = styled.span`
  color: white;
  font-size: 1.45rem;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: 0.03em;
  @media (max-width: 600px) {
    font-size: 1.09rem;
  }
`;

const Breadcrumb = styled.div`
  font-size: 0.95em;
  margin-top: 0.16em;
  color: #e0e2fc;
  letter-spacing: .02em;
  white-space: nowrap;
  @media (max-width: 600px) {
    font-size: 0.86em;
  }
`;

const BreadcrumbLink = styled.span`
  color: #b7c8ff;
  cursor: pointer;
  &:hover { text-decoration: underline; }
`;

const BreadcrumbArrow = styled.span`
  margin: 0 5px;
  color: #9db0dc;
`;

// Section: right (icons and profile)
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 1.2em;
  @media (max-width: 500px) {
    gap: 0.7em;
  }
`;

const ThemeToggle = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 1.15em;
  input { display: none; }
`;

const ToggleSlider = styled.span`
  display: inline-block;
  width: 38px;
  height: 18px;
  background: #181924;
  border-radius: 12px;
  position: relative;
  margin: 0 8px;
  &:before {
    content: "";
    position: absolute;
    left: 3px;
    top: 2.5px;
    width: 14px;
    height: 13px;
    background: #5e84ed;
    border-radius: 7px;
    transition: left 0.2s;
  }
  input:checked + &::before {
    left: 20px;
    background: #d3d9f7;
  }
`;

const IconButton = styled.button`
  background: transparent;
  border: none;
  color: #e0e2fc;
  position: relative;
  padding: 0.2em;
  margin: 0 0.1em;
  font-size: 1.25em;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.11s;
  &:hover {
    background: #18192477;
  }
`;

const NotificationCount = styled.span`
  position: absolute;
  top: -5px;
  right: -8px;
  background: #fc5352;
  color: #fff;
  border-radius: 50%;
  font-size: 0.69em;
  width: 17px;
  height: 17px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

const ProfileAvatar = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 0.3em;
  box-shadow: 0 0 0 2px #6e7ad9;
`;

// Header flex arrangement (inner wrap)
const HeaderFlex = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

// ---- Usage Example (React) ----
function Header() {
  return (
    <HeaderRoot>
      <HeaderHighlight>
        <HeaderFlex>
          <HeaderLeft>
            <HeaderIconBox>
              <FaHome color="#fff" size={22} />
            </HeaderIconBox>
            <HeaderTitleBlock>
              <HeaderMainTitle>Inventory</HeaderMainTitle>
              <Breadcrumb>
                <BreadcrumbLink>All Products</BreadcrumbLink>
                <BreadcrumbArrow>›</BreadcrumbArrow>
                <BreadcrumbLink style={{ color: "#fc8181" }}>Surface Mount</BreadcrumbLink>
              </Breadcrumb>
            </HeaderTitleBlock>
          </HeaderLeft>
          <HeaderRight>
            <ThemeToggle>
              Theme
              <input type="checkbox" />
              <ToggleSlider />
            </ThemeToggle>
            <IconButton>
              <FaBell />
              <NotificationCount>4</NotificationCount>
            </IconButton>
            <IconButton>
              <FaGlobe />
            </IconButton>
            <IconButton>
              <FaLightbulb />
            </IconButton>
            <ProfileAvatar
              src="https://randomuser.me/api/portraits/men/78.jpg"
              alt="User profile"
            />
          </HeaderRight>
        </HeaderFlex>
      </HeaderHighlight>
    </HeaderRoot>
  );
}

export default Header;
