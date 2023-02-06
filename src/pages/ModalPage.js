import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      {
        <Button onClick={handleClose} secondary>
          I accept
        </Button>
      }
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p> Children prop </p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        convallis ligula sit amet ullamcorper sodales. Quisque a libero sit amet
        eros porta volutpat eget eget nunc. Sed laoreet erat eget elit
        pellentesque, sit amet malesuada lorem vulputate. Aliquam porttitor erat
        tortor, ut aliquam enim bibendum non. Praesent placerat erat aliquam
        suscipit porta. Fusce ac urna nec nunc hendrerit bibendum id non velit.
        Mauris dignissim erat ac porta dapibus. Sed lacinia mauris non nulla
        fringilla bibendum. Vivamus finibus vehicula mauris, non gravida diam.
        Ut condimentum sed justo nec venenatis. Mauris imperdiet consequat
        augue, non suscipit nisl rhoncus hendrerit. Fusce blandit, est eget
        hendrerit mattis, magna ex fermentum metus, quis convallis massa ligula
        non ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Donec lobortis ligula et massa convallis
        dictum. Aliquam in bibendum metus. Cras magna erat, sodales in mi
        rutrum, egestas dictum purus. Donec consequat massa a purus ornare
        iaculis. Morbi porttitor velit metus, quis aliquet magna faucibus vitae.
        Morbi interdum, augue quis viverra mattis, nibh nisl congue nisi, a
        fringilla nulla odio at magna. Cras justo massa, dictum ac erat nec,
        convallis ornare nisi. Fusce ornare diam vel turpis dapibus mattis.
        Praesent ut justo non est scelerisque auctor a id arcu. Vivamus volutpat
        lobortis eros ac viverra. Proin ut posuere purus, ut fermentum orci.
        Vestibulum molestie fermentum enim, non auctor ligula luctus eget. Nunc
        quis viverra nisl. Nam rhoncus quam sit amet posuere consequat. Cras
        dignissim libero ut ligula consequat, eget aliquet mi vestibulum. Cras
        euismod tellus tellus, quis porttitor augue condimentum quis.
        Suspendisse sed imperdiet felis. Sed a ultricies quam, id venenatis
        ipsum. In a pellentesque augue. Mauris non orci rhoncus, tempus quam id,
        auctor sapien. Duis laoreet accumsan dui vel porta. Vestibulum lacinia
        diam turpis, vel ullamcorper justo dignissim a. Nulla sagittis finibus
        nunc quis ultricies. Proin nec ex id leo placerat ultrices. Maecenas
        condimentum, risus a porta malesuada, ligula quam efficitur nisl, in
        eleifend lectus ipsum vel massa. Cras mi lacus, molestie eu neque a,
        finibus facilisis orci. Maecenas lacinia laoreet iaculis. Curabitur
        malesuada mattis orci, eu maximus enim aliquam in. Morbi a aliquam
        turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Maecenas rutrum est dapibus, ornare lectus ut, lobortis massa. Quisque
        metus leo, tempor sit amet quam a, tempor blandit risus. Proin
        sollicitudin sapien id elementum hendrerit. Mauris semper justo et sem
        sagittis finibus. Mauris ut consequat turpis, vel aliquam justo. Aliquam
        felis ex, sodales sit amet faucibus a, fringilla ut odio.
      </p>
    </div>
  );
}

export default ModalPage;
