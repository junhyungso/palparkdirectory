import Card from "../UI/Card";

const BusinessInfo = (props) => {
  return (
    <li>
      <Card>
        <div><strong>{props.bus.name}</strong></div>
				<div>{props.bus.type}</div>
        <div>{props.bus.address}</div>
        <div>{props.bus.contact}</div>
      </Card>
    </li>
  );
};

export default BusinessInfo;
