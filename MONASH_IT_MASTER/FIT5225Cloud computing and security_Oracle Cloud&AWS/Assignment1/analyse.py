import matplotlib.pyplot as plt
import numpy as np

data1 = [
    [1, 1, 0.30881, 0.30497],
    [1, 2, 0.26784, 0.26940],
    [1, 4, 0.25882, 0.25407],
    [1, 8, 0.27947, 0.25502]
]

data2 = [
    [1, 1, 0.05925, 0.05429],
    [1, 10, 0.15329, 0.13616],
    [1, 250, 0.13258, 0.10945],
    [1, 1000, 0.19862, 0.19638]
]

data1 = np.array(data1)
data2 = np.array(data2)

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 4))

ax1.plot(data1[:, 1], data1[:, 2], color='#0072BD', label='1st', marker='o')
ax1.plot(data1[:, 1], data1[:, 3], color='#D95319', label='2nd', marker='o')
ax1.set_xlabel('Max Users')
ax1.set_ylabel('Average Response Time (s)')
ax1.set_title('Table 1')
ax1.legend()
ax1.set_xticks(data1[:, 1])

ax2.plot(data2[:, 1], data2[:, 2], color='#77AC30', label='1st', marker='o')
ax2.plot(data2[:, 1], data2[:, 3], color='#A2142F', label='2nd', marker='o')
ax2.set_xlabel('Max Users')
ax2.set_ylabel('Average Response Time (s)')
ax2.set_title('Table 2')
ax2.legend()
ax2.set_xticks(data2[:, 1])

plt.tight_layout()
plt.show()