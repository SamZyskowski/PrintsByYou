import React from 'react'
import { getDropdownMenuPlacement } from 'react-bootstrap/esm/DropdownMenu';
import { Container, Divider } from 'semantic-ui-react'
import { Dropdown, Grid, Segment } from 'semantic-ui-react'
import '../../App.css';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
"https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

const Services = () => (
<div>
	<div style={{
			display: 'block', width: 1600, padding: 30
	}}>
	<br/>


<h1>Save this template for future orders</h1>
<br/>
<br/>
  <Grid columns = 'equal'>
    
      <Grid.Column>
        <Segment>
	<Dropdown text='All Types'>
	<Dropdown.Menu>
	<Dropdown.Item text='Hoodie' />
	<Dropdown.Item text='Jacket' />
	<Dropdown.Item text='T-Shirt'  />
	<Dropdown.Item text='Jersey'  />
	</Dropdown.Menu>
</Dropdown>
</Segment>
  </Grid.Column>
  <Grid.Column>
  <Segment>
<Dropdown text='Estimated Units'>
	<Dropdown.Menu>
	<Dropdown.Item text='0-50'  />
	<Dropdown.Item text='50-100'/>
	<Dropdown.Item text='100-150'  />
	<Dropdown.Item text='150-200'  />
	</Dropdown.Menu>
</Dropdown>
</Segment>
</Grid.Column>
<Grid.Column>
  <Segment>
<Dropdown text='Shipping Priority'>
	<Dropdown.Menu>
	<Dropdown.Item text='Standard (2 weeks)'  />
	<Dropdown.Item text='First class (1-2 weeks)' />
	<Dropdown.Item text='Priority (3-5 days)' />
	<Dropdown.Item text='1 day' />
	</Dropdown.Menu>
</Dropdown>
</Segment>
</Grid.Column>
<Grid.Column>
  <Segment>
<Dropdown text='Quality'>
	<Dropdown.Menu>
	<Dropdown.Item text='Graphic' />
	<Dropdown.Item text='Text' />
	<Dropdown.Item text='Both'  />

	</Dropdown.Menu>
</Dropdown>
</Segment>
</Grid.Column>


</Grid>
</div>
</div>
)

export default Services
