// Components
import Navigation from '../components/navigation/Navigation';
import NavigationBlocks from '../components/blocks/NavigationBlocks';
import Stats from '../components/blocks/Stats';
import StatsBlock from '../components/blocks/StatsBlock';
import KPICard from '../components/blocks/KPICard';
import Donut from '../components/blocks/DonutChart';

const innerStatsBlock = [
  { statName: 'Higher project completion rate', 
    statValue: '+25%', 
    tooltipClass: 'transparent',
    tooltip: (
      <div>
        <h4>Analysis Log</h4>
        <p>Previous analyses initiated for your source.</p>
        <table>
          <thead>
            <tr>
              <th>Source Name</th>
              <th>Analysis Type</th>
              <th>Entity Analyses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">google.com</a></td>
              <td>Light Analysis</td>
              <td>70</td>
            </tr>
            <tr>
              <td><a href="https://www.wikipedia.org/" target="_blank" rel="noopener noreferrer">wikipedia.org</a></td>
              <td>Deep Analysis</td>
              <td>190</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  { statName: 'Higher project completion rate', 
    statValue: '2x', 
    tooltipClass: 'transparent',
    tooltip: (
      <div>
        <h4>Initiate New Analysis</h4>
        <p>The deeper the analysis, the more powerful the insights. Choose the level that best aligns with your needs-each tier expands on the last, unlocking greater intelligence and precision.
        </p>
        <a href="#" className='button'>
          Start a New Analysis
        </a>
      </div>
    ),
  },
  { statName: 'Cross-team knowledge bridging', 
    statValue: 'UJ9 & UJ18', 
    tooltipClass: 'transparent',
    tooltip: (
      <div>
        <h4>Significance</h4>
        <p>Understanding this relationship is crucial for understanding how the UV tool manages project dependencies and ensures consistent builds.
        </p>
        <a href="#" className='button'>
          Lear more about Significance
        </a>
      </div>
    ),
  },
];

const innerStats = [
  { statName: 'Bandwith increase', 
    statValue: '+162%', 
    tooltipClass: 'transparent',
    tooltip: (
      <div>
        <h4>Analysis Log</h4>
        <p>Previous analyses initiated for your source.</p>
        <table>
          <thead>
            <tr>
              <th>Source Name</th>
              <th>Analysis Type</th>
              <th>Entity Analyses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">google.com</a></td>
              <td>Light Analysis</td>
              <td>70</td>
            </tr>
            <tr>
              <td><a href="https://www.wikipedia.org/" target="_blank" rel="noopener noreferrer">wikipedia.org</a></td>
              <td>Deep Analysis</td>
              <td>190</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  { statName: 'Better storage efficiency', 
    statValue: '2-3x', 
    tooltipClass: 'transparent',
    tooltip: (
      <div>
        <h4>Initiate New Analysis</h4>
        <p>The deeper the analysis, the more powerful the insights. Choose the level that best aligns with your needs-each tier expands on the last, unlocking greater intelligence and precision.
        </p>
        <a href="#" className='button'>
          Start a New Analysis
        </a>
      </div>
    ),
  },
  { statName: 'Rows ingested / second', 
    statValue: 'Up to 9M', 
    tooltipClass: 'transparent',
    tooltip: (
      <div>
        <h4>Significance</h4>
        <p>Understanding this relationship is crucial for understanding how the UV tool manages project dependencies and ensures consistent builds.
        </p>
        <a href="#" className='button'>
          Lear more about Significance
        </a>
      </div>
    ),
  },
];

const innerStatsSecondary = [
  { statName: 'Unique visitors', 
    statValue: '10,450', 
    tooltip: (
      <div>
        <h4>Unique visitors</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde inventore alias necessitatibus omnis mollitia quidem quis laudantium repudiandae animi.
        </p>
        <a href="#" className='button'>
          Learn more about Unique visitors
        </a>
      </div>
    ),
  },
  { statName: 'Bounce rate', 
    statValue: '56.1%', 
    tooltip: (
      <div>
        <h4>Bounce rate</h4>
        <p>Previous analyses initiated for your source.</p>
        <table>
          <thead>
            <tr>
              <th>Source Name</th>
              <th>Analysis Type</th>
              <th>Entity Analyses</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">google.com</a></td>
              <td>Light Analysis</td>
              <td>70</td>
            </tr>
            <tr>
              <td><a href="https://www.wikipedia.org/" target="_blank" rel="noopener noreferrer">wikipedia.org</a></td>
              <td>Deep Analysis</td>
              <td>190</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
  { statName: 'Visit duration', 
    statValue: '5.2min', 
    tooltip: (
      <div>
        <h4>Visit duration</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aspernatur cumque omnis debitis aut exercitationem, iure minus.
        </p>
        <a href="#" className='button'>
          Learn more about Visit duration
        </a>
      </div>
    ),
  },
  { statName: 'Daily active users', 
    statValue: '3,450', 
    tooltip: (
      <div>
        <h4>Daily active users</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime corporis temporibus autem hic? Sit maxime voluptatum illum ratione omnis iure odio mollitia officiis est odit. Veniam tempora numquam fugiat consectetur distinctio quas fugit ut eum.
        </p>
        <a href="#" className='button'>
        Learn more about Daily active users
        </a>
      </div>
    ),
  },
  { statName: 'Weekly sessions', 
    statValue: '1,342', 
    tooltip: (
      <div>
        <h4>Weekly sessions</h4>
        <p>Previous analyses initiated for your source.</p>
        <table>
          <thead>
            <tr>
              <th>Source Name</th>
              <th>Analysis Type</th>
              <th>Entity Analyses</th>
              <th>Last update</th>  
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">google.com</a></td>
              <td>Light Analysis</td>
              <td>70</td>
              <td>3 minutes ago</td>
            </tr>
            <tr>
              <td><a href="https://www.wikipedia.org/" target="_blank" rel="noopener noreferrer">wikipedia.org</a></td>
              <td>Deep Analysis</td>
              <td>190</td>
              <td>23 minutes ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  },
];

export default function Blocks() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen pt-[50px] pb-[100px] relative">
      <Navigation
        links={[
          { linkName: "Report Blocks", linkURL: "/blocks" },
        ]}
        widthClass="max-w-7xl px-3" 
      />

      <NavigationBlocks />

      <div id="stats" className='w-full'>
        <StatsBlock 
          title="Strategic Workflow Efficiency and Project Impact" 
          badge="performance data" 
          description="Performance analysis reveals consistent impact across 5 distinct projects with higher completion rates than team average. Directly assigned issues move through workflow with fewer status transitions, positioning the engineer as a valuable bridge between implementation and product teams." 
          stats={innerStatsBlock} 
        />

        <Stats 
          title="Architected for speed and reliability" 
          badge="Security at Scale" 
          description="Database innovative architecture avoids the central bottlenecks of traditional systems, enhancing system reliability. This design ensures high productivity and security, minimizing the risk of service disruptions and outages." 
          stats={innerStats} 
        />

        <Stats 
          title="Insights made for everyone" 
          badge="Analytics" 
          stats={innerStatsSecondary}
        />
      </div>

      <div id="kpi-cards" className='w-full'>
        <KPICard 
          title="Revolutionize your customer service"
          description="Harness the power of AI to provide 24/7 support, reduce response times, and increase customer satisfaction with our cutting-edge solutions."
          data={[
            {
              name: 'Monthly active users',
              stat: '340',
              previousStat: '400',
              change: '-15%',
              changeType: 'negative',
              details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel neque quaerat ad assumenda amet hic quasi illum, eveniet itaque ratione sunt id facere corrupti quis tempore incidunt optio nesciunt? Architecto inventore praesentium, beatae at perferendis odit sapiente perspiciatis a nihil voluptates dolorum voluptatum tenetur quis repellendus mollitia ex placeat culpa doloribus, laboriosam libero ipsa, earum rerum. Odit animi provident omnis earum repellat? Eos consequatur optio, quasi reiciendis inventore officia!',
            },
            {
              name: 'Monthly sessions',
              stat: '672',
              previousStat: '350',
              change: '+91.4%',
              changeType: 'positive',
              details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel neque quaerat ad assumenda amet hic quasi illum, eveniet itaque ratione sunt id facere corrupti quis tempore incidunt optio nesciunt? Architecto inventore praesentium, beatae at perferendis odit sapiente perspiciatis a nihil voluptates dolorum voluptatum tenetur quis repellendus mollitia ex placeat culpa doloribus, laboriosam libero ipsa, earum rerum. Odit animi provident omnis earum repellat? Eos consequatur optio, quasi reiciendis inventore officia!',
            },
            {
              name: 'Monthly page views',
              stat: '3,290',
              previousStat: '3,012',
              change: '+9.2%',
              changeType: 'positive',
              details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel neque quaerat ad assumenda amet hic quasi illum, eveniet itaque ratione sunt id facere corrupti quis tempore incidunt optio nesciunt? Architecto inventore praesentium, beatae at perferendis odit sapiente perspiciatis a nihil voluptates dolorum voluptatum tenetur quis repellendus mollitia ex placeat culpa doloribus, laboriosam libero ipsa, earum rerum. Odit animi provident omnis earum repellat? Eos consequatur optio, quasi reiciendis inventore officia!',
            },
          ]}
        />
        
        <KPICard 
          title="Revolutionize your customer service"
          description="Harness the power of AI to provide 24/7 support, reduce response times, and increase customer satisfaction with our cutting-edge solutions."
          data={[
            {
              name: 'Monthly active users',
              stat: '340',
              previousStat: '400',
              change: '-15%',
              changeType: 'negative',
              details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel neque quaerat ad assumenda amet hic quasi illum, eveniet itaque ratione sunt id facere corrupti quis tempore incidunt optio nesciunt? Architecto inventore praesentium, beatae at perferendis odit sapiente perspiciatis a nihil voluptates dolorum voluptatum tenetur quis repellendus mollitia ex placeat culpa doloribus, laboriosam libero ipsa, earum rerum. Odit animi provident omnis earum repellat? Eos consequatur optio, quasi reiciendis inventore officia!',
            },
            {
              name: 'Monthly sessions',
              stat: '672',
              previousStat: '350',
              change: '+91.4%',
              changeType: 'positive',
              details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel neque quaerat ad assumenda amet hic quasi illum, eveniet itaque ratione sunt id facere corrupti quis tempore incidunt optio nesciunt? Architecto inventore praesentium, beatae at perferendis odit sapiente perspiciatis a nihil voluptates dolorum voluptatum tenetur quis repellendus mollitia ex placeat culpa doloribus, laboriosam libero ipsa, earum rerum. Odit animi provident omnis earum repellat? Eos consequatur optio, quasi reiciendis inventore officia!',
            },
            {
              name: 'Monthly page views',
              stat: '3,290',
              previousStat: '3,012',
              change: '+9.2%',
              changeType: 'positive',
              details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel neque quaerat ad assumenda amet hic quasi illum, eveniet itaque ratione sunt id facere corrupti quis tempore incidunt optio nesciunt? Architecto inventore praesentium, beatae at perferendis odit sapiente perspiciatis a nihil voluptates dolorum voluptatum tenetur quis repellendus mollitia ex placeat culpa doloribus, laboriosam libero ipsa, earum rerum. Odit animi provident omnis earum repellat? Eos consequatur optio, quasi reiciendis inventore officia!',
            },
            {
              name: 'Monthly revenue',
              stat: '$34.1K',
              previousStat: '$31.5K',
              change: '+6.1%',
              changeType: 'positive',
              details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel neque quaerat ad assumenda amet hic quasi illum, eveniet itaque ratione sunt id facere corrupti quis tempore incidunt optio nesciunt? Architecto inventore praesentium, beatae at perferendis odit sapiente perspiciatis a nihil voluptates dolorum voluptatum tenetur quis repellendus mollitia ex placeat culpa doloribus, laboriosam libero ipsa, earum rerum. Odit animi provident omnis earum repellat? Eos consequatur optio, quasi reiciendis inventore officia!',
            },
            {
              name: 'Users',
              stat: '500.1K',
              previousStat: '453.9K',
              change: '+14.2%',
              changeType: 'positive',
              details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel neque quaerat ad assumenda amet hic quasi illum, eveniet itaque ratione sunt id facere corrupti quis tempore incidunt optio nesciunt? Architecto inventore praesentium, beatae at perferendis odit sapiente perspiciatis a nihil voluptates dolorum voluptatum tenetur quis repellendus mollitia ex placeat culpa doloribus, laboriosam libero ipsa, earum rerum. Odit animi provident omnis earum repellat? Eos consequatur optio, quasi reiciendis inventore officia!',
            },
            {
              name: 'User growth',
              stat: '11.3%',
              previousStat: '14.3%',
              change: '-6.7%',
              changeType: 'negative',
              details: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, vel neque quaerat ad assumenda amet hic quasi illum, eveniet itaque ratione sunt id facere corrupti quis tempore incidunt optio nesciunt? Architecto inventore praesentium, beatae at perferendis odit sapiente perspiciatis a nihil voluptates dolorum voluptatum tenetur quis repellendus mollitia ex placeat culpa doloribus, laboriosam libero ipsa, earum rerum. Odit animi provident omnis earum repellat? Eos consequatur optio, quasi reiciendis inventore officia!',
            },
          ]}
        />
      </div>

      <div id="donut-chart" className='w-full'>
          <Donut />
      </div>

    </div>
  );
}
