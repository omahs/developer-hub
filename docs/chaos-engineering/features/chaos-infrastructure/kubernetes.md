---
title: Kubernetes Execution Plane
sidebar_position: 4
description: Kubernetes chaos infrastructure components
redirect_from:
	- /docs/chaos-engineering/technical-reference/architecture/kubernetes
---
Harness execution plane for Kubernetes includes the Kubernetes chaos infrastructure components. These components are described below.


### Workflow controller
The Argo Workflow Controller is responsible for creating the chaos experiment.

### Chaos operator
Leverages the Kubernetes operator pattern to interpret the fault configuration, execute the individual faults in an experiment, execute the fault and its probes (if they have been defined), and populate the result after the execution.

### Subscriber
Serves as the link between the [execution plane](/docs/chaos-engineering/architecture-and-security/architecture/execution-plane.md) and the [control plane](/docs/chaos-engineering/architecture-and-security/architecture/control-plane.md). Its responsibilities include performing a health check on all the components in the chaos execution plane, creating a chaos experiment CR from a chaos experiment template, monitoring the events associated with the chaos experiment during its execution, and sending the chaos experiment results to the control plane.

### Chaos exporter
Optional component that facilitates external observability in HCE. This is achieved by exporting the chaos metrics generated during the chaos injection as time-series data to the Prometheus database for processing and analysis.

### Event tracker
Optional component capable of triggering an automated chaos experiment based on a set of conditions defined for any given resource in the cluster. It manages EventTrackerPolicy CR, which is a set of conditions validated by the event tracker. If the current state of the tracked resources matches the state defined in the EventTrackerPolicy CR, the chaos experiment is triggered. This feature can only be used if GitOps is enabled.
